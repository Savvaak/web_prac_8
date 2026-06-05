import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';
import { tGroup } from "../groupdata";

type GroupProps = {
    data: tGroup;
};

function GroupGrid({ data }: GroupProps) {
    const rows: GridRowsProp = data;
    const columns: GridColDef[] = [
        { field: 'Группа', flex: 1 },
        { field: 'Минимальный разгон', flex: 1 },
        { field: 'Максимальный разгон', flex: 1 },
        { field: 'Минимальный объём двигателя', flex: 1 },
        { field: 'Максимальный объём двигателя', flex: 1 },
    ];

    return (
        <Container maxWidth="lg" sx={{ height: '500px', mt: '20px' }}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                //showToolbar={true}
                rows={rows}
                columns={columns}
            />
        </Container>
    );
}
export default GroupGrid;