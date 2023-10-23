function MainButton({children, buttonType, isDisabled, onClick, buttonClass}) {
  return (
    
    <button type={buttonType} disabled = {isDisabled} className={`btn btn-${buttonClass}`} onClick={onClick} >
        {children}
    </button>
  )
}

MainButton.defaultProps = {
    buttonClass: 'primary',
}
export default MainButton