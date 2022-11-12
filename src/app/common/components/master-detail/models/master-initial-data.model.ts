export interface MasterInitialData {
    newButton: String;
    columnTitles: ColumnTitle[];
    rows: any[];
}

interface ColumnTitle {
    key: String;
    title: String;
    visible: Boolean;
}