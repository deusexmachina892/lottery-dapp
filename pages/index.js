import React, {Component} from 'react';
import lottery from '../lottery';
import web3 from '../web3';

class Lottery extends Component{
    constructor(props){
        super(props);
        this.state ={
            manager: '',
            participate_amount:'0.5',
            message:'',
            total_amount: ''
        }

    }

    async componentDidMount(){

        
        //get the public address of the manager
        const manager = await lottery.methods.manager().call();
        const manager2 = await web3.eth.getAccounts();
        //manager1 = manager2
        //console.log('manager:', manager);
        //console.log('manager2:', manager2[0]);
        this.setState({manager: manager});

        const total_amount = await web3.eth.getBalance(lottery.options.address);
        //console.log(total_amount);

        this.setState({total_amount: total_amount});
    }

    render(){
        return(
           <div>
               <h1>Total Lottery pool is {this.state.total_amount}</h1>
               <form>
                   <input placeholder="0.5" />
                   <button type="submit">Participate</button>
               </form>

            <hr/> <br/><hr/>
            <p>The manager of the Lottery app is {this.state.manager}</p>
            <button>Pick Winner</button>
           </div>
        );
    }
}

export default Lottery;