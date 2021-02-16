import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      // marginTop:"0px"
    },
  },
};
const getMuiTheme = () =>
  createMuiTheme({
    overrides: {
      MuiInputLabel: {
        formControl: {
          color: "white",
        }
      },
      MuiFormControl: {
        root: {
          // margin:5,
          width: '60%',
        },
      },
      MuiSelect: {
        icon: {
          color: "white"
        },
      },
      MuiTnput: {
        underline: {

          borderBottom: "1px solid white"

        },
      },
      MuiPaper: {
        root: {
          color: "white",
          backgroundColor: "#03162e",
          marginTop:"48px",
          marginLeft:"-10px",
          // width:"0px"
        },
      },
      MuiCheckbox: {
        root: {
          color: "white"
        },
        colorSecondary: {
          color: "white"
        },
      },
      MuiInputBase: {
        input: {
          color: "white"

        },
      },
    }

  });



export default function Dropdown1(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  const renderValue = (selected) => {
    if (selected.length > 1) {
      return `${selected.length} selected`;
    } else {
      return selected[0];
    }
  }

  return (
    <div>
      <MuiThemeProvider theme={getMuiTheme()}>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">{props.label}</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<Input />}
            renderValue={renderValue}
            MenuProps={MenuProps}
          >
            {props.data.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox color="primary" checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </MuiThemeProvider>
    </div>
  )
};
