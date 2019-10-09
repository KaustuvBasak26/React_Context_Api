import {Button} from '@material-ui/core';
import React from 'react';
import {SharedSnackbarConsumer} from './SharedSnackbar.context';

const styles = {
    Button: {
        margin: 8
    }
};

const ButtonB = () => {
    <SharedSnackbarConsumer>
        {({openSnackbar})=>(
            <Button
              style={styles.Button}
              variant="raised"
              color="primary"
              onClick={openSnackbar('You clicked Button B!')}
            >
                Button B
            </Button>
        )}
    </SharedSnackbarConsumer>
};

export default ButtonB;