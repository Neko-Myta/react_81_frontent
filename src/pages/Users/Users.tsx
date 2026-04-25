import {Link} from "react-router-dom";

import { UsersPage, PageInfo, Title } from "./styles";

function Users(){
    return(
        <UsersPage>
            <Title>Users page</Title>
            <Link to="/users/user">
            <PageInfo>Users pege info</PageInfo>
            </Link>
        </UsersPage>
    )
}

export default Users