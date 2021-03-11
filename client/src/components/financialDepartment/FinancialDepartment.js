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

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import PaymentIcon from '@material-ui/icons/Payment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import DnsIcon from '@material-ui/icons/Dns';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BuildIcon from '@material-ui/icons/Build';

import './financialDepartment.css';

import { Switch, Link, Route, Redirect } from 'react-router-dom';
import ClearStudent from './ClearStudent';
import ConfirmPayment from './ConfirmPayment';
import ChangePassword from './ChangePassword';

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

export default function FinancialDepartment() {
	const [studentMenu, setStudentMenu] = React.useState(false);
	const [clearanceMenu, setClearanceMenu] = React.useState(false);
	const [settingsMenu, setSettingsMenu] = React.useState(false);

	const [logout, setLogout] = React.useState(false);

	const studentRef = useRef(null);

	useEffect(() => {
		document.title = 'Financial Department';
	});

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
						<span style={{ fontSize: '20px' }}>Finanical department</span>
					</IconButton>
				</div>
				<Divider />

				<List>
					<ListItem button onClick={handleStudentMenu}>
						<ListItemIcon>
							<PersonIcon />
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
								to='/financialDepartment/financialDepartmentConfirmPayment'
								style={{ textDecoration: 'none', color: 'black' }}>
								<ListItem button className={classes.nested}>
									<ListItemIcon>
										<PaymentIcon />
									</ListItemIcon>
									<ListItemText primary={'Confirm Payment'} />
								</ListItem>
							</Link>
						</List>
					</Collapse>

					<ListItem button onClick={handleClearanceMenu}>
						<ListItemIcon>
							<DnsIcon />
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
								to='/financialDepartment/financialDepartmentClearStudent'
								style={{ textDecoration: 'none', color: 'black' }}>
								<ListItem button className={classes.nested}>
									<ListItemIcon>
										<AssignmentTurnedInIcon />
									</ListItemIcon>
									<ListItemText primary={'Clear Student'} />
								</ListItem>
							</Link>
						</List>
					</Collapse>

					<ListItem button onClick={handleSettingsMenu}>
						<ListItemIcon>
							<SettingsIcon />
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
								to='/financialDepartment/financialDepartmentChangePassword'
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
						path='/financialDepartment/financialDepartmentConfirmPayment'
						component={ConfirmPayment}
					/>
					<Route
						exact
						path='/financialDepartment/financialDepartmentClearStudent'
						component={ClearStudent}
					/>
					<Route
						exact
						path='/financialDepartment/financialDepartmentChangePassword'
						component={ChangePassword}
					/>
				</Switch>
			</main>
		</div>
	);
}
