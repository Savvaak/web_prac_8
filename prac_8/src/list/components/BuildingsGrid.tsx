import cars from "../table";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';

function BuildingsGrid() {
    const rows: GridRowsProp = cars;
    const columns: GridColDef[] = [
        { field: 'Название', headerName: 'Название', flex: 1 },
        { field: 'Страна',  flex: 0.5 },
        { field: 'Модель двигателя', flex: 0.5 },
        { field: 'Год', flex: 0.5 },
        { field: 'Объём двигателя', flex: 0.5 },
        { field: 'Разгон', flex: 0.5 },
    ];

    return (
        <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                showToolbar={true}
                rows={rows}
                columns={columns}
            />
        </Container>
    );
}
export default BuildingsGrid;