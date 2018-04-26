var domElement = React.createElement;

//create a new Reactjs component MyList
var MyList =  React.createClass({
  render: function(){
    var list = this.props.data.map(function(text, index){
      return domElement('li', {key:index }, text)
    })
    return (
            domElement('ul', null, list)
    )
  }
})


var HelloWorldBanner =  React.createClass({
  render: function(){
    return (
            domElement('div', null, 
                domElement('h1', null, 'This is a...'),
                domElement(MyList, {data:['Spring5','Boot2','ReactJs', 'Minimal', 'Project']})
      )
    )
  }
})