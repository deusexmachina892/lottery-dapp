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


    onSubmit = async (event) => {

        event.preventDefault();
        const address = await web3.eth.getAccounts();

        if(this.state.participate_amount < 0.01)    return alert('Your entered amount is too low. Please enter an amount greater than 0.01');
        this.setState({message: 'Please wait...'});
        const enter_lottery = await lottery.methods.enterLottery().send({
            from: address[0],
            value: web3.utils.toWei(this.state.participate_amount, "ether")
        });

        this.setState({message: 'You have been added to the Lottery!'});

    }

    onClick = async ()=>{
        this.setState({message: "Please wait..."});
        const account = await web3.eth.getAccounts();

        const winner = await lottery.methods.pickWinner().send({
            from: account[0]
        });

        this.setState({message: "Payment sent to winner"});
    }

    render(){
        return(
           <div>
               <h1>Total Lottery pool is {web3.utils.fromWei(this.state.total_amount, "ether")}</h1>
               <form onSubmit={this.onSubmit}>
                   <input placeholder={this.state.participate_amount} onChange = {(event) =>{
                       this.setState({
                           participate_amount:event.target.value
                       })
                   }} />
                   <button type="submit">Participate</button>
               </form>

            <hr/> <br/><hr/>
            <p>The manager of the Lottery app is {this.state.manager}</p>
            <button  onClick={this.onClick}>Pick Winner</button>
            <p>{this.state.message}</p>
           </div>
        );
    }
}

export default Lottery;