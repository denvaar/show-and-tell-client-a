import React from 'react'
import styled from 'styled-components'

import { Link } from 'components/Ui'
import Skeleton from 'components/Skeleton'


const Wrapper = styled.nav`
  border-bottom: 1px solid #ddd;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 84px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
`

const NavItems = styled.ul`
  list-style: none;

  ${props => props.align === 'left' && 'flex: 1; justify-content: flex-start;'}
  display: flex;
  align-items: center;
`

const NavItem = styled.li`
  padding-left: 5px;
  padding-right: 5px;
`

const ProfileImage = styled.img`
  width: 50px;
  border-radius: 50px;
`




const Navbar = ({ loading, user }) => {
  return (
    <Wrapper>
      <NavItems align={'left'}>
        <NavItem>
          <svg viewBox="0 0 23 32" height="30px"><path d="M8.318 16.545v14.699h1.197l4.83-14.699m-5.82-4.957c0 1.523 1.164 2.754 2.992 2.754 1.751 0 2.915-1.231 2.883-2.754.032-1.598-1.132-2.786-2.916-2.786s-2.927 1.188-2.96 2.786m2.982-4.838c-.5 0-.914-.41-.914-.907V.907c0-.497.413-.907.914-.907.5 0 .914.41.914.907v4.936a.902.902 0 0 1-.914.907m3.34.896a.896.896 0 0 1-.533-.173.898.898 0 0 1-.207-1.263l2.916-3.996a.913.913 0 0 1 1.273-.205c.413.291.5.864.207 1.263l-2.916 3.996a.9.9 0 0 1-.74.378m2.35 2.614a.919.919 0 0 1-.816-.486.897.897 0 0 1 .392-1.22l4.406-2.28a.91.91 0 0 1 1.23.39.897.897 0 0 1-.392 1.22l-4.407 2.279a.93.93 0 0 1-.413.097M7.97 7.646a.9.9 0 0 1-.74-.378L4.314 3.272a.896.896 0 0 1 .207-1.263.912.912 0 0 1 1.273.205L8.71 6.21a.896.896 0 0 1-.207 1.263.977.977 0 0 1-.533.173M5.718 10.26a.885.885 0 0 1-.425-.108L.887 7.873a.906.906 0 0 1-.392-1.22.92.92 0 0 1 1.23-.39l4.406 2.28c.446.226.62.777.392 1.22a.9.9 0 0 1-.805.497" fill="royalblue" fillRule="evenodd"></path></svg>
        </NavItem>
      </NavItems>
      {user ?
        <NavItems>
          <NavItem>
            <div>
              {user.name}
            </div>
            <div>
              <Link to="/logout">{'Sign out'}</Link>
            </div>
          </NavItem>
          <NavItem>
            <ProfileImage src={user.photo} />
          </NavItem>
        </NavItems>
      :
        <NavItems>
          {loading ?
            <NavItems>
              <NavItem>
                <Skeleton width={'75px'} />
                <Skeleton width={'75px'} />
              </NavItem>
              <NavItem>
                <Skeleton width={'50px'} height={'50px'} borderRadius={'50px'} />
              </NavItem>
            </NavItems>
          :
            <Link to="/login">{'Sign in'}</Link>
          }
        </NavItems>}
    </Wrapper>
  )
}

export default Navbar
