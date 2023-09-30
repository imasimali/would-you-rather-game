import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  Menu,
  Segment,
  Image,
  Grid,
  Button,
  Container,
} from "semantic-ui-react";
import { setAuthUser } from "../redux/actions/authUser";

class Nav extends Component {
  state = {
    isMobile: false,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const isMobile = window.innerWidth < 650;
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile });
    }
  };

  handleLogout = (e) => {
    e.preventDefault();
    this.props.setAuthUser(null);
  };

  render() {
    const { authUser, users } = this.props;
    const { isMobile } = this.state;

    return (
      <Container>
        {isMobile ? (
          <Segment as={Fragment}>
            <Grid padded="vertically" columns={1}>
              <Grid.Row>
                <Grid.Column>
                  <Image
                    src={users[authUser].avatarURL}
                    avatar
                    spaced="right"
                    verticalAlign="bottom"
                  />
                  <p
                    style={{
                      display: "inline-block",
                      marginBottom: "3px",
                    }}
                  >
                    {users[authUser].name}
                  </p>
                  <Button
                    content="Logout"
                    labelPosition="right"
                    basic
                    compact
                    icon="log out"
                    size="mini"
                    floated="right"
                    onClick={this.handleLogout}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Menu pointing secondary widths={3}>
                    <Menu.Item name="home" as={NavLink} to="/" exact />
                    <Menu.Item name="new poll" as={NavLink} to="/add" />
                    <Menu.Item
                      name="leader board"
                      as={NavLink}
                      to="/leaderboard"
                    />
                  </Menu>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        ) : (
          <Segment as={Menu} pointing secondary>
            <Menu.Item name="home" as={NavLink} to="/" exact />
            <Menu.Item name="new poll" as={NavLink} to="/add" />
            <Menu.Item name="leader board" as={NavLink} to="/leaderboard" />
            <Menu.Menu position="right">
              <Menu.Item>
                <span>
                  <Image
                    src={users[authUser].avatarURL}
                    avatar
                    spaced="right"
                    verticalAlign="bottom"
                  />
                  <p
                    style={{
                      display: "inline-block",
                      marginBottom: "3px",
                    }}
                  >
                    {users[authUser].name}
                  </p>
                </span>
              </Menu.Item>
              <Menu.Item>
                <Button
                  content="Logout"
                  labelPosition="right"
                  basic
                  compact
                  icon="log out"
                  size="mini"
                  onClick={this.handleLogout}
                />
              </Menu.Item>
            </Menu.Menu>
          </Segment>
        )}
      </Container>
    );
  }
}

function mapStateToProps({ users, authUser }) {
  return {
    authUser,
    users,
  };
}

export default connect(mapStateToProps, { setAuthUser })(Nav);
