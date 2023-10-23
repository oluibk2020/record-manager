function Theme({children,theme}) {
  return (
    <div className={theme? 'changeTheme': null}>

        {children}
    </div>
  )
}
export default Theme