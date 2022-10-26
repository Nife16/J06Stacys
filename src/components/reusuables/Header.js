

const Header = () => {

    return (
        <div className='flex-row header'>
                <div className='flex-col third-width'>
                    <img className="logo" src="https://thumbs.dreamstime.com/b/house-abstract-home-construction-architecture-real-estate-realty-logo-design-vector-concept-illustrations-156766848.jpg" />
                </div>
                <div className='flex-col third-width'>
                    <div className='flex-row full-height'>
                        <a href="/sign-up" className='container header-link'>
                            <div className='header-button'>
                                <p className='margin-center'>Sign Up</p>
                            </div>
                        </a>
                        <a href="/sign-up" className='container header-link'>
                            <div className='header-button'>
                                <p className='margin-center'>Sign In</p>
                            </div>
                        </a>
                        <a href="/sign-up" className='container header-link'>
                            <div className='header-button'>
                                <p className='margin-center'>View Stuff</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='flex-col third-width'>

                </div>
            </div>
    )

}

export default Header