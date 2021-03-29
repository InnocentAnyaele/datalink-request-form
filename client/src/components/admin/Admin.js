import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneAllIcon from '@material-ui/icons/DoneAll';

import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DnsIcon from '@material-ui/icons/Dns';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BuildIcon from '@material-ui/icons/Build';

import './Admin.css';

import { Switch, Link, Route, Redirect } from 'react-router-dom';
import ChangePassword from './ChangePassword';
import StudentRequestFormApproved from './StudentRequestFormApproved';
import StudentRequestFormCompleted from './StudentRequestFormCompleted';
import StudentRequestFormPicked from './StudentRequestFormPicked';
import ClearanceApproved from './ClearanceApproved';
import ClearanceCompleted from './ClearanceCompleted';
import ClearancePicked from './ClearancePicked';
import TransferApproved from './TransferApproved';
import TransferCompleted from './TransferCompleted';
import TransferPicked from './TransferPicked';
import DefermentApproved from './DefermentApproved';
import DefermentCompleted from './DefermentCompleted';
import DeferementPicked from './DefermentPicked';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

export default function Admin() {
	const [studentMenu, setStudentMenu] = React.useState(false);
	const [clearanceMenu, setClearanceMenu] = React.useState(false);
	const [settingsMenu, setSettingsMenu] = React.useState(false);
	const [transferMenu, setTransferMenu] = React.useState(false);
	const [defermentMenu, setDefermentMenu] = React.useState(false);

	const [logout, setLogout] = React.useState(false);

	const studentRef = useRef(null);

	useEffect(() => {
		document.title = 'Admin';
	});

	const handleDefermentMenu = () => {
		setDefermentMenu(!defermentMenu);
	};

	const handleTransferMenu = () => {
		setTransferMenu(!transferMenu);
	};

	const handleStudentMenu = () => {
		setStudentMenu(!studentMenu);
	};

	const handleClearanceMenu = () => {
		setClearanceMenu(!clearanceMenu);
	};

	const handleSettingsMenu = () => {
		setSettingsMenu(!settingsMenu);
	};

	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const logoutHandler = () => {
		setLogout(true);
	};

	if (logout) {
		sessionStorage.setItem('token', null);
		sessionStorage.clear();
		return <Redirect to='/' />;
	}

	if (sessionStorage.getItem('token') !== null) {
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position='fixed'
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open,
					})}
					style={{ backgroundColor: '#4169E1' }}>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={handleDrawerOpen}
							edge='start'
							className={clsx(classes.menuButton, {
								[classes.hide]: open,
							})}>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' noWrap>
							DataLink Request Forms
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					variant='permanent'
					className={clsx(classes.drawer, {
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					})}
					classes={{
						paper: clsx({
							[classes.drawerOpen]: open,
							[classes.drawerClose]: !open,
						}),
					}}>
					<div className={classes.toolbar}>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === 'rtl' ? (
								<ChevronRightIcon />
							) : (
								<ChevronLeftIcon />
							)}
							<span style={{ fontSize: '20px' }}>Admin</span>
						</IconButton>
					</div>
					<Divider />

					<List>
						<ListItem button onClick={handleStudentMenu}>
							<ListItemIcon>
								<PersonIcon style={{ color: 'black' }} />
							</ListItemIcon>
							<ListItemText primary={'Student Form'} />
							{studentMenu ? <ExpandLess /> : <ExpandMore />}
						</ListItem>

						<Collapse
							ref={studentRef}
							in={studentMenu}
							timeout='auto'
							unmountOnExit>
							<List
								component='div'
								disablePadding
								style={{ paddingLeft: '10px' }}>
								<Link
									to='/admin/adminStudentRequestFormApproved'
									style={{ textDecoration: 'none', color: 'black' }}>
									<ListItem button className={classes.nested}>
										<ListItemIcon>
											<ThumbUpIcon />
										</ListItemIcon>
										<ListItemText primary={'Approved'} />
									</ListItem>
								</Link>
								<Link
									to='/admin/adminStudentRequestFormCompleted'
									style={{ textDecoration: 'none', color: 'black' }}>
									<ListItem button className={classes.nested}>
										<ListItemIcon>
											<LibraryAddCheckIcon />
										</ListItemIcon>
										<ListItemText primary={'Completed'} />
									</ListItem>
								</Link>
								<Link
									to='/admin/adminStudentRequestFormPicked'
									style={{ textDecoration: 'none', color: 'black' }}>
									<ListItem button className={classes.nested}>
										<ListItemIcon>
											<DoneAllIcon />
										</ListItemIcon>
										<ListItemText primary={'Picked'} />
									</ListItem>
								</Link>
							</List>
						</Collapse>

						<ListItem button onClick={handleClearanceMenu}>
							<ListItemIcon>
								<DnsIcon style={{ color: 'black' }} />
							</ListItemIcon>
							<ListItemText primary={'Clearance'} />
							{clearanceMenu ? <ExpandLess /> : <ExpandMore />}
						</ListItem>

						<Collapse in={clearanceMenu} timeout='auto' unmountOnExit>
							<List
								component='div'
								disablePadding
								style={{ paddingLeft: '10px' }}>
								<Link
									to='/admin/adminClearanceApproved'
									style={{ textDecoration: 'none', color: 'black' }}>
									<ListItem button className={classes.nested}>
										<ListItemIcon>
											<ThumbUpIcon />
										</ListItemIcon>
										<ListItemText primary={'Approved'} />
									</ListItem>
								</Link>
								<Link
									to='/admin/adminClearanceCompleted'
									style={{ textDecoration: 'none', color: 'black' }}>
									<ListItem button className={classes.nested}>
										<ListItemIcon>
											<LibraryAddCheckIcon />
										</ListItemIcon>
										<ListItemText primary={'Completed'} />
									</ListItem>
								</Link>
								<Link
									to='/admin/adminClearancePicked'
									style={{ textDecoration: 'none', color: 'black' }}>
									<ListItem button className={classes.nested}>
										<ListItemIcon>
											<DoneAllIcon />
										</ListItemIcon>
										<ListItemText primary={'Picked'} />
									</ListItem>
								</Link>
							</List>
						</Collapse>

						<ListItem button onClick={handleTransferMenu}>
							<ListItemIcon>
								<DoubleArrowIcon style={{ color: 'black' }} />
							</ListItemIcon>
							<ListItemText primary={'Transfer'} />
							{settingsMenu ? <ExpandLess /> : <ExpandMore />}
						</ListItem>

						<Collapse in={transferMenu} timeout='auto' unmountOnExit>
							<List
								component='div'
								disablePadding
								style={{ paddingLeft: '10px' }}>
								<Link
									to='/admin/adminTransferApproved'
									style={{ textDecoration: 'none', color: 'black' }}>
									<ListItem button className={classes.nested}>
										<ListItemIcon>
											<ThumbUpIcon />
										</ListItemIcon>
										<ListItemText primary={'Approved'} />
									</ListItem>
								</Link>
								<Link
									to='/admin/adminTransferCompleted'
									style={{ textDecoration: 'none', color: 'black' }}>
									<ListItem button className={classes.nested}>
										<ListItemIcon>
											<LibraryAddCheckIcon />
										</ListItemIcon>
										<ListItemText primary={'Completed'} />
									</ListItem>
								</Link>
								<Link
									to='/admin/adminTransferPicked'
									style={{ textDecoration: 'none', color: 'black' }}>
									<ListItem button className={classes.nested}>
										<ListItemIcon>
											<DoneAllIcon />
										</ListItemIcon>
										<ListItemText primary={'Picked'} />
									</ListItem>
								</Link>
							</List>
						</Collapse>

						<ListItem button onClick={handleDefermentMenu}>
							<ListItemIcon>
								<HourglassFullIcon style={{ color: 'black' }} />
							</ListItemIcon>
							<ListItemText primary={'Deferment'} />
							{settingsMenu ? <ExpandLess /> : <ExpandMore />}
						</ListItem>

						<Collapse in={defermentMenu} timeout='auto' unmountOnExit>
							<List
								component='div'
								disablePadding
								style={{ paddingLeft: '10px' }}>
								<Link
									to='/admin/adminDefermentApproved'
									style={{ textDecoration: 'none', color: 'black' }}>
									<ListItem button className={classes.nested}>
										<ListItemIcon>
											<ThumbUpIcon />
										</ListItemIcon>
										<ListItemText primary={'Approved'} />
									</ListItem>
								</Link>
								<Link
									to='/admin/adminDefermentCompleted'
									style={{ textDecoration: 'none', color: 'black' }}>
									<ListItem button className={classes.nested}>
										<ListItemIcon>
											<LibraryAddCheckIcon />
										</ListItemIcon>
										<ListItemText primary={'Completed'} />
									</ListItem>
								</Link>
								<Link
									to='/admin/adminDefermentPicked'
									style={{ textDecoration: 'none', color: 'black' }}>
									<ListItem button className={classes.nested}>
										<ListItemIcon>
											<DoneAllIcon />
										</ListItemIcon>
										<ListItemText primary={'Picked'} />
									</ListItem>
								</Link>
							</List>
						</Collapse>

						<ListItem button onClick={handleSettingsMenu}>
							<ListItemIcon>
								<SettingsIcon style={{ color: 'black' }} />
							</ListItemIcon>
							<ListItemText primary={'Settings'} />
							{settingsMenu ? <ExpandLess /> : <ExpandMore />}
						</ListItem>

						<Collapse in={settingsMenu} timeout='auto' unmountOnExit>
							<List
								component='div'
								disablePadding
								style={{ paddingLeft: '10px' }}>
								<Link
									to='/admin/adminChangePassword'
									style={{ textDecoration: 'none', color: 'black' }}>
									<ListItem button className={classes.nested}>
										<ListItemIcon>
											<BuildIcon />
										</ListItemIcon>
										<ListItemText primary={'Change Password'} />
									</ListItem>
								</Link>

								<ListItem
									button
									className={classes.nested}
									onClick={logoutHandler}>
									<ListItemIcon>
										<ExitToAppIcon />
									</ListItemIcon>
									<ListItemText primary={'Logout'} />
								</ListItem>
							</List>
						</Collapse>
					</List>
				</Drawer>

				<main className={classes.content}>
					<div className={classes.toolbar} />
					<Switch>
						<Route
							exact
							path='/admin/adminStudentRequestFormApproved'
							component={StudentRequestFormApproved}
						/>
						<Route
							exact
							path='/admin/adminStudentRequestFormCompleted'
							component={StudentRequestFormCompleted}
						/>
						<Route
							exact
							path='/admin/adminStudentRequestFormPicked'
							component={StudentRequestFormPicked}
						/>
						<Route
							exact
							path='/admin/adminClearanceApproved'
							component={ClearanceApproved}
						/>
						<Route
							exact
							path='/admin/adminClearanceCompleted'
							component={ClearanceCompleted}
						/>
						<Route
							exact
							path='/admin/adminClearancePicked'
							component={ClearancePicked}
						/>
						<Route
							exact
							path='/admin/adminTransferApproved'
							component={TransferApproved}
						/>
						<Route
							exact
							path='/admin/adminTransferCompleted'
							component={TransferCompleted}
						/>
						<Route
							exact
							path='/admin/adminTransferPicked'
							component={TransferPicked}
						/>
						<Route
							exact
							path='/admin/adminDefermentApproved'
							component={DefermentApproved}
						/>
						<Route
							exact
							path='/admin/adminDefermentCompleted'
							component={DefermentCompleted}
						/>
						<Route
							exact
							path='/admin/adminDefermentPicked'
							component={DeferementPicked}
						/>
						<Route
							exact
							path='/admin/adminChangePassword'
							component={ChangePassword}
						/>
					</Switch>
				</main>
			</div>
		);
	} else {
		return <Redirect to={'/'} />;
	}
}
