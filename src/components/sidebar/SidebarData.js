import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'
import * as BiIcons from 'react-icons/bi'
import * as FaIcons from 'react-icons/fa'


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />
    },
    {
        title: 'Category',
        // path: '',
        icon: <BiIcons.BiDrink />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Classics',
                path: '/classics',
                icon: <GiIcons.GiWineGlass />
            },
            {
                title: 'Creamy',
                path: '/creamy',
                icon: <GiIcons.GiWineGlass />
            },
            {
                title: 'Shots',
                path: '/shots',
                icon: <GiIcons.GiWineGlass />
            },
            {
                title: 'Punch',
                path: '/punch',
                icon: <GiIcons.GiWineGlass />
            },
            {
                title: 'Mocktails',
                path: '/mocktails',
                icon: <GiIcons.GiWineGlass />
            }
        ]
    },
    {
        title: 'Ingredients',
        path: '/multi-ingredients',
        icon: <GiIcons.GiCutLemon />,
    },
    {
        title: 'Favorites',
        path: '/favorites',
        icon: <GiIcons.GiCutLemon />,
    },
    {
        title: 'Spirits',
        // path: '',
        icon: <GiIcons.GiWineBottle />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Bourbon',
                path: '/bourbon',
                icon: <GiIcons.GiGlassShot />
            },
            {
                title: 'Brandy',
                path: '/brandy',
                icon: <GiIcons.GiGlassShot/>
            },
            {
                title: 'Gin',
                path: '/gin',
                icon: <GiIcons.GiGlassShot />
            },
            {
                title: 'Liqueur',
                path: '/liqueur',
                icon: <GiIcons.GiGlassShot/>
            },
            {
                title: 'Rum',
                path: '/rum',
                icon: <GiIcons.GiGlassShot />
            },
            {
                title: 'Scotch',
                path: '/scotch',
                icon: <GiIcons.GiGlassShot/>
            },
            {
                title: 'Tequila',
                path: '/tequila',
                icon: <GiIcons.GiGlassShot />
            },
            {
                title: 'Vodka',
                path: '/vodka',
                icon: <GiIcons.GiGlassShot/>
            }
        ]
    },
    {
        title: 'Popular',
        path: '/popular',
        icon: <FaIcons.FaCocktail />,
    },
    {
        title: 'Latest',
        path: '/latest',
        icon: <GiIcons.GiEmptyHourglass />,
    },
    {
        title: 'Surprise',
        path: '/',
        icon: <AiIcons.AiOutlineGift />,
    }
]