import { Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import CircleIcon from '@mui/icons-material/Circle';
import DoneIcon from '@mui/icons-material/Done';
import StarIcon from '@mui/icons-material/Star';

const userData = {
    Vijay: {
        img: '/assets/images/coach/Vijay-Wade1.webp',
        name: 'Vijay Wade',
        button: <Button>Contact</Button>,

        info1: (
            <span>
                Agile Coach,Career Coach,Life Coach<br></br> Experience : 21+ Years
            </span>
        ),
        location: 'India ',
        infohead: 'Coach Specializations :',
        info2: (
            <span>
                <List>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='Corporate Coaching' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='Leadership Coaching' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary=' Organizational Development Coaching' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='Work Life Balance Coaching' />
                    </ListItem>
                </List>
            </span>
        ),
    },
    Rahul: {
        img: '/assets/images/coach/RahulShah.webp',
        name: 'Rahul Shah',
        button: <Button>Contact</Button>,
        info1: (
            <span>
                Agile Coach<br></br>Experience : 20+ Years"
            </span>
        ),
        location: 'India ',
        infohead: 'Coach Specializations :',
        info2: (
            <span>
                <ListItem
                    sx={{
                        m: 0,
                        padding: 0,
                    }}
                >
                    <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                    <ListItemText primary='Corporate Coaching' />
                </ListItem>
                <ListItem
                    sx={{
                        m: 0,
                        padding: 0,
                    }}
                >
                    <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                    <ListItemText primary=' Enterprise Agile Coaching' />
                </ListItem>
                <ListItem

                    sx={{
                        m: 0,
                        padding: 0,
                    }}
                >
                    <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                    <ListItemText primary='Organizational Development Coaching' />
                </ListItem>
                <ListItem
                    sx={{
                        m: 0,
                        padding: 0,
                    }}
                >
                    <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                    <ListItemText primary=' SAFe Agile Coaching' />
                </ListItem>

            </span>
        ),
    },
    Mandar: {
        img: '/assets/images/coach/mk-e.webp',
        name: 'Mandar',
        button: <Button>Contact</Button>,

        info1: (
            <span>
                Agile Coach,Career Coach<br></br> Experience :  17+ Years
            </span>
        ),
        location: 'USA ',
        infohead: 'Coach Specializations :',
        info2: (
            <span>
                <List>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>




                        <ListItemText primary='Agile Transformation Expert' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='Career Reinvention Coach' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='Enterprise Agile Coaching' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='SAFe Agile Coaching' />
                    </ListItem>
                </List>
            </span>
        ),
    },
    Jeff: {
        img: '/assets/images/coach/jeff.webp',
        name: 'Jeff',
        button: <Button>Contact</Button>,

        info1: (
            <span>
                Agile Coach<br></br> Experience : 21+ Years
            </span>
        ),
        location: 'USA ',
        infohead: 'Coach Specializations :',
        info2: (
            <span>
                <List>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>

                        <ListItemText primary='Corporate Coaching' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='Enterprise Agile Coaching' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='Organizational Development Coaching' />
                    </ListItem>

                </List>
            </span>
        ),
    },

    Ali: {
        img: '/assets/images/coach/ali-sohail.webp',
        name: 'Ali',
        button: <Button>Contact</Button>,

        info1: (
            <span>
                Agile Coach<br></br> Experience : 12+ Years
            </span>
        ),
        location: 'United Kingdom ',
        infohead: 'Coach Specializations :',
        info2: (
            <span>
                <List>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>

                        <ListItemText primary=' Enterprise Agile Coaching' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary=' Professional Development Coaching' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='Organizational Development Coaching' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='  SAFe 5 Program Consultant' />
                    </ListItem>

                </List>
            </span>
        ),
    },
    Rahulmukh: {
        img: '/assets/images/coach/rahul-mukh.webp',
        name: ' Rahul Mukh.',
        button: <Button>Contact</Button>,

        info1: (
            <span>
                Agile Coach<br></br> Experience : 16+ Years
            </span>
        ),
        location: 'USA',
        infohead: 'Coach Specializations :',
        info2: (
            <span>
                <List>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>


                        <ListItemText primary=' Agile Transformation Expert' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='Enterprise Agile Coaching' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='Organizational Development Coaching' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='Leadership Coaching' />
                    </ListItem>

                </List>
            </span>
        ),
    },

    Viji: {
        img: '/assets/images/coach/viji-menon.webp',
        name: 'Viji',
        button: <Button>Contact</Button>,

        info1: (
            <span>
                Agile Coach<br></br> Experience : 18+ Years
            </span>
        ),
        location: 'India',
        infohead: 'Coach Specializations :',
        info2: (
            <span>
                <List>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>


                        <ListItemText primary='Agile Transformation Expert' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='Corporate Coaching' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='Enterprise Agile Coaching' />
                    </ListItem>

                </List>
            </span>
        ),
    },

    Shijo: {
        img: '/assets/images/coach/shijo-paul.webp',
        name: 'Shijo',
        button: <Button>Contact</Button>,

        info1: (
            <span>
                Agile Coach<br></br> Experience : 23+ Years
            </span>
        ),
        location: 'India',
        infohead: 'Coach Specializations :',
        info2: (
            <span>
                <List>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>


                        <ListItemText primary='Agile Transformation Expert' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='Corporate Coaching' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='Enterprise Agile Coaching' />
                    </ListItem>
                    <ListItem
                        sx={{
                            m: 0,
                            padding: 0,
                        }}
                    >
                        <StarIcon fontSize='1px' sx={{ mr: 2 }}></StarIcon>
                        <ListItemText primary='Organizational Development Coaching' />
                    </ListItem>

                </List>

            </span>
        ),
    },

};

export const usersList = [
    userData.Vijay,
    userData.Rahul,
    userData.Mandar,
    userData.Jeff,
    userData.Ali,
    userData.Rahulmukh,
    userData.Viji,
    userData.Shijo,
];
export const usersList1 = [
    userData.Vijay,

    userData.Bhalchandra,
    userData.Kayalvizhi,
    userData.Vivek,
    userData.Astha


];
