import React from "react"

export const ButtonComponent: React.FC = () => {
    const [buttonClicked, setButtonClicked] = React.useState(false);

    const handleButtonClick = () => {
        return (setButtonClicked(!buttonClicked));
    }

    return (
        <>
            <button
                className='realmAnvil-Button'
                onClick={
                    handleButtonClick
                }
            >
                Click Here
            </button>
            <div>
            {
                buttonClicked ?
                    <p>The button state is true</p>
                    :
                    <p>The button state is false</p>
            }
            </div>
        </>
    )
}