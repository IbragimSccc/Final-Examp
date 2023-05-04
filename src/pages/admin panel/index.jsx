// import { forwardRef, useEffect, useState } from "react"

// const HeaderWrapper = styled.header`
//   background-color: #fff;
//   width: 100%;
//   align-items: center;
//   height: 70px;
//   box-shadow: 0px 4px 10px 0 rgb(0, 0, 0, 0.05);
// `
// const Content = styled(Container)`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 100%;
// `
// const LogoutButton = styled.button`
//   margin-left: 40px;
// `

// export const AdminPage = forwardRef((props, ref) => {
//   const [user, setUser] = useState(null)
//   useEffect(() => {
    
//     fetch('http://localhost:1717/me')
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         setUser(data)
//       })
//   }, [])

//   return (
//     <HeaderWrapper ref={ref}>
//       <Content>
//         <div>Logo</div>
        
//         <div>
//           <div>username</div>
//           <LogoutButton>Log out</LogoutButton>
//         </div>
        
//       </Content>
//     </HeaderWrapper>
//   )
// })