import { useState } from 'react'
import PropTypes from 'prop-types'


const InputBox = ({ onSubmit, error }) => {
    const [answer, setAnswer] = useState("")
    const [wiggleEffect, setWiggleEffect] = useState(false)
    const [bounceEffect, setBounceEffect] = useState(false)
    const [alertClass, setAlertClass] = useState("")
    const [showError, setShowError] = useState(false)

    const handleChange = (e) => {
        setAnswer(e.target.value)
    }

    const resetInput = () => {
        setWiggleEffect(false)
        setBounceEffect(false)
        setAlertClass("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (answer) {
            setAnswer("")
            if (onSubmit(answer.toLowerCase()) === false) {
                setAlertClass("ring-red-200");
                setShowError(true);
                setWiggleEffect(true);
            } else {
                setAlertClass("ring-green-200");
                setShowError(false);
                setBounceEffect(true);
            }
        }
    }

    return (
        <div className="w-72">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Answer"
                    value={answer}
                    className={`${wiggleEffect && "animate-wiggle"} ${bounceEffect && "animate-bounce"} ${alertClass} px-5 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-xl text-base border-0 shadow-md outline-none focus:outline-none focus:ring w-full`}
                    onChange={handleChange}
                    onAnimationEnd={() => {
                        resetInput()}
                    }
                />
            </form>
            { showError ? <div className="text-sm text-red-500 m-1 text-left">{ error }</div> : <></>}
        </div>
    )
}

InputBox.propTypes = {
    onSubmit: PropTypes.func,  // This callback should return `true` if the submission was correct and `false` otherwise
    error: PropTypes.string
}

export default InputBox
