import question from "../packages/questions";
import Slot from "./component/Slot";

const Form = (props) => {
    const username = localStorage.getItem('username_student')
    const roomCode = localStorage.getItem('student_room_code')

    const formSubmitHandler = (e) => {
        e.preventDefault()
        const opts = document.querySelectorAll('[id=opt]')
        const data = {username:username,room_code:roomCode,h_index:hi}
        
        var hi = 0;

        for(let i = 0; i < opts.length; i++){
            if(opts[i].checked === true){
                hi += parseInt(opts[i].value)
            }
        }
        
        fetch('http://localhost:3005/joinroom',{
            method:'post',
            headers:{'Content-Type':'application/json',
            'Access-Control-Allow-Headers' : '*'},
            body:JSON.stringify(data)
        })
        .then(resp => {
            resp.json()
            console.log(data)
        }
        )
        .then(console.log())
        .catch(err => console.log(err))

        localStorage.setItem('hIndex',hi)
        props.updateHappinessIndex(hi.toString())
        window.location.href = '/result'
    }
    return(
        <div className="w-full h-full">
        {
            question.map(que => {
                return <Slot data={que}/>
            })
        }
            <div className="w-full flex justify-end">
                <button onClick={e => formSubmitHandler(e)} className='p-2 mb-5 mr-5 mt-5 pl-4 pr-4 text-lg rounded bg-button shadow-lg hover:shadow-xl active:shadow-md transition-all delay-75'>Submit</button>
            </div>
        </div>
    )
}

export default Form