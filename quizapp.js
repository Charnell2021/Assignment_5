class QuizApp extends React.Component {

state = {

currentQuestionIndex: 0,

};

goToNextQuestion = () => {

  this.setState({

    currentQuestionIndex: this.state.currentQuestionIndex + 1

  })

};



render() {

  const { currentQuestionIndex } = this.state;



  let comp;

  if (currentQuestionIndex === 0) {

    comp = <What does a react-router package contain? />;

  } else if (currentQuestionIndex === 1) {

    comp = <What is the difference between a Frontend Developer and Backend Developer?/>;

  } else if (currentQuestionIndex === 2) {

    comp = <What is a Framework? />;

  } else if (currentQuestionIndex === 3) {

    comp = <What is a hook? />;

  }



  return (

    <div>

      {comp}

      <button onClick={this.goToNextQuestion}>

        What is the most used HTTP library?

      </button>

    </div>

  )

}
