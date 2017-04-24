import React from 'react'; 
class Welcome extends React.Component {
    constructor(props){
    super(props)
     
    this.state = {
    	date: new Date(),
    	test: '1'
     }

    this.setState({
    	date: new Date(),
    	test: 'constructor'
    })
    console.log('我已经在constructor里将props和state初始化好了')
   	}

   	componentWillMount(){
   		this.setState({
   			date: new Date(),
   			test: 'componentWillMount'
   		})
   		console.log('运行到这里的话，说明吗马上就要运行render了')
   	}
  	render() {
  		this.setState({
  			date: new Date(),
  			test: 'render'
  		})
    	console.log('这里是render')
  	return (
  		<div>
  			<h1>Hello,{this.props.name}</h1>
  			<h2>{this.state.date.toString()}</h2>
  			<p>{test}</p>
  		</div>
  		)
  	}
  	componentDidMount(){
  		this.setState({
  			date: new Date(),
  			test: 'componentDidMount'
  		})
    	console.log('已经挂载页面了')
  	}
  	componentWillReceiveProps(){
  		this.setState({
  			date: new Date(),
  			test: 'componentWillReceiveProps'
  		})
  	}
  	shouldComponentUpdate(){
  		this.setState({
  			date: new Date(),
  			test: 'shouldComponentUpdate'
  		})
  	}
  	componentWillUpdate(){
  		this.setState({
  			date: new Date(),
  			test: 'componentWillUpdate'
  		})
  	}
  	componentWillUnmount(){
  		console.log('dead')
  	}
}

export default Welcome