import { FormControlLabel, Radio, Checkbox } from '@mui/material';
import { tChoise } from '../quizData'; 

interface ChoiceTaskProps {
    task: tChoise[0];
    type: string;
    value: string[]; 
    onChange: (question: string) => void;
}

function ChoiceTask({ task, type, value, onChange }: ChoiceTaskProps) {
    const isChecked = value.includes(task.question);

    if (type === "CO") {
        return (
            <FormControlLabel
                control={
                    <Radio 
                        checked={isChecked} 
                        onChange={() => onChange(task.question)} 
                        color="info" 
                        size="small" 
                    />
                }
                label={task.question}
            />
        );
    }
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={isChecked}
                    onChange={() => onChange(task.question)} 
                    color="info"
                    size="small"
                />
            }
            label={task.question}
        />
    );
}

export default ChoiceTask;