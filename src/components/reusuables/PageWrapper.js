import Header from "./Header"


const PageWrapper = (props) => {

    return (
        <div className='flex-col page-container'>
            <Header user={props.user} setUser={props.setUser} />
            {props.children}
        </div>
    )

}

export default PageWrapper