import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

type tSeries = {
    'Максимальный разгон': boolean,
    'Минимальный объём двигателя': boolean,
    'Максимальный объём двигателя': boolean,
    'Минимальный разгон': boolean,
}
type CheckboxProps = {
    series: tSeries;
    setSeries: React.Dispatch<
        React.SetStateAction<tSeries>
    >;
    isBar: boolean;
    setIsBar: React.Dispatch<
        React.SetStateAction<boolean>
    >;
};

function SettingChart({ series, setSeries, isBar, setIsBar }: CheckboxProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeries({
            ...series,
            [event.target.name]: event.target.checked,
        });
    };
    const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsBar(event.target.value === 'bar' ? true : false);
    };
    return (
        <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            sx={{ m: "20px 0" }}
        >
            <FormControl>
                <FormLabel id="label-radio-group">
                    Тип диаграммы:
                </FormLabel>
                <RadioGroup
                    name="group-radio"
                    value={(isBar) ? "bar" : "dot"}
                >
                    <FormControlLabel value="bar"
                        control={
                            <Radio checked={isBar} onChange={handleRadio}/>
                        }
                        label="Гистограмма"
                    />
                    <FormControlLabel value="dot"
                        control={
                            <Radio checked={!isBar} onChange={handleRadio}/>
                        }
                        label="Линейная"
                    />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel id="label-checkbox-group">
                    На диаграмме показать:
                </FormLabel>
                <FormControlLabel
                    control={
                        <Checkbox checked={series["Максимальный разгон"]}
                            onChange={handleChange}
                            name="Максимальный разгон" />
                    }
                    label="максимальный разгон"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={series["Минимальный разгон"]}
                            onChange={handleChange}
                            name="Минимальный разгон" />
                    }
                    label="минимальный разгон"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={series["Минимальный объём двигателя"]}
                            onChange={handleChange}
                            name="Минимальный объём двигателя" />
                    }
                    label="минимальный объём двигателя"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={series["Максимальный объём двигателя"]}
                            onChange={handleChange}
                            name="Максимальный объём двигателя" />
                    }
                    label="максимальный объём двигателя"
                />
            </FormControl>
        </Stack>
    )
}
export default SettingChart;