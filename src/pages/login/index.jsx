// import styled from "styled-components"
// import { forwardRef, useEffect, useState } from "react"
// import { Container } from "../../styles/adaptive"
// import { Link } from "react-router-dom"

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

// export const Header = forwardRef((props, ref) => {
//   const [user, setUser] = useState(null)
//   useEffect(() => {
    
//     fetch('http://localhost:1717/me', {
//       headers: {
//         'X-Auth': localStorage.getItem('token')
//       }
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data?.username) setUser(data)
//       })
//   }, [])

//   return (
//     <HeaderWrapper ref={ref}>
//       <Content>
//         <div>Logo</div>
        
//         <div>
//           {
//             user
//             ? (
//               <>
//               <div>{user.username}</div>
//               <LogoutButton onClick={() => localStorage.removeItem('token')}>Log out</LogoutButton>
//               </>
//             )
//             : (
//               <Link to="/auth/login">Go to Login</Link>
//             )
//           }
          
//         </div>
        
//       </Content>
//     </HeaderWrapper>
//   )
// })