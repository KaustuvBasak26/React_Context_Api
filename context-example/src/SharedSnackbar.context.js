import React, {Component} from 'react';
import SharedSnackbar from './SharedSnackbar.component';

const SharedSnackbarContext = React.createContext();

export class SharedSnackbarProvider extends Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            message: ''
        };
    }

    openSnackbar = message => {
        this.setState({
            message,
            isOpen: true
        })
    };

    closeSnackbar = () => {
        this.setState({
            isOpen: false
        })
    };

    render(){
        const {childeren} = this.props;

        return(
            <SharedSnackbarContext.Provider
            value = {{
                openSnackbar: this.openSnackbar,
                closeSnackbar: this.closeSnackbar,
                snackbarIsOpen: this.state.isOpen,
                message: this.state.message
            }}>
                <SharedSnackbar/>
                {childeren}
            </SharedSnackbarContext.Provider>
        )
    }
}

export const SharedSnackbarConsumer = SharedSnackbarContext.Consumer;