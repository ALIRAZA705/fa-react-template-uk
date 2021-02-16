import { createMuiTheme } from '@material-ui/core';

// Partials
import sideNav from './sideNav';
import tableStyles from './tableStyles';
import tableFilter from './tableFilter';
import formElements from './formElements';
import roles from './roles';
import userArea from './userArea';
import status from './status';
import tab from './tab';
import tabBlock from './tabBlock';
import player from './player';
import palette from './palette';
import header from './header';
import background from './background';
import fullModal from './fullModal';
import typography from './typography';

// Overrides
import MuiCssBaseline from './MuiOverrides/MuiCssBaseline';
import MuiButton from './MuiOverrides/MuiButton';
import MuiTab from './MuiOverrides/MuiTab';
import MuiTextField from './MuiOverrides/MuiTextField';
import MuiOutlinedInput from './MuiOverrides/MuiOutlinedInput';
import MuiInput from './MuiOverrides/MuiInput';
import MuiInputBase from './MuiOverrides/MuiInputBase';
import MuiInputLabel from './MuiOverrides/MuiInputLabel';
import MuiTable from './MuiOverrides/MuiTable';
import MuiTableCell from './MuiOverrides/MuiTableCell';
import MuiTableRow from './MuiOverrides/MuiTableRow';
import MuiTableSortLabel from './MuiOverrides/MuiTableSortLabel';
import MuiFormControl from './MuiOverrides/MuiFormControl';
import MuiFormLabel from './MuiOverrides/MuiFormLabel';
import MuiTooltip from './MuiOverrides/MuiTooltip';
import MuiPopover from './MuiOverrides/MuiPopover';
import MuiDialog from './MuiOverrides/MuiDialog';
import MuiSelect from './MuiOverrides/MuiSelect';

const theme = createMuiTheme({
    palette,
    header,
    background,
    sideNav,
    tableStyles,
    tableFilter,
    roles,
    formElements,
    userArea,
    status,
    tab,
    tabBlock,
    player,
    fullModal,
    overrides: {
        MuiButton,
        MuiCssBaseline,
        MuiDialog,
        MuiFormControl,
        MuiFormLabel,
        MuiInput,
        MuiInputBase,
        MuiInputLabel,
        MuiOutlinedInput,
        MuiPopover,
        MuiSelect,
        MuiTab,
        MuiTable,
        MuiTableCell,
        MuiTableRow,
        MuiTableSortLabel,
        MuiTextField,
        MuiTooltip
    },
    typography
});

export default theme;