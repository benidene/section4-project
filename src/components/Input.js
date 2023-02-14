const Input = ({label, value}) => {

    //따로 컴포넌트를 만드는 경우
    const inputComponent = <>
        <input 
        type="text" 
        required 
        {...value}
        placeholder={`${label}을 입력해주세요.`}
        />
    </>

    const textAreaComponent = <>
        <textarea
        type="text" 
        required 
        {...value}
        placeholder={`${label}을 입력해주세요.`}
        />
    </>

    return (
        <>
            <label>{label}</label>
            {label === "제목" ?
                <input 
                    type="text" 
                    required 
                    {...value}
                    placeholder={`${label}을 입력해주세요.`}
                /> : 
                <textarea
                    type="text" 
                    required 
                    {...value}
                    placeholder={`${label}을 입력해주세요.`}
                />
            }

            {/* 따로 만드는 경우 */}
            {/* <label>{label}</label>
            { label === "제목" ? inputComponent : textAreaComponent } */}
        </>
    )
}

export default Input;