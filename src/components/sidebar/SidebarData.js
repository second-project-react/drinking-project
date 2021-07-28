import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'


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
        icon: <AiIcons.AiFillHome />,
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
        path: '/ingredients',
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
                icon: <GiIcons.GiWineGlass />
            },
            {
                title: 'Brandy',
                path: '/brandy',
                icon: <GiIcons.GiWineGlass />
            },
            {
                title: 'Gin',
                path: '/gin',
                icon: <GiIcons.GiWineGlass />
            },
            {
                title: 'Liqueur',
                path: '/liqueur',
                icon: <GiIcons.GiWineGlass />
            },
            {
                title: 'Rum',
                path: '/rum',
                icon: <GiIcons.GiWineGlass />
            },
            {
                title: 'Scotch',
                path: '/scotch',
                icon: <GiIcons.GiWineGlass />
            },
            {
                title: 'Tequila',
                path: '/tequila',
                icon: <GiIcons.GiWineGlass />
            },
            {
                title: 'Vodka',
                path: '/vodka',
                icon: <GiIcons.GiWineGlass />
            }
        ]
    },
    {
        title: 'Popular',
        path: '/popular',
        icon: <GiIcons.GiCutLemon />,
    },
    {
        title: 'Latest',
        path: '/latest',
        icon: <GiIcons.GiCutLemon />,
    },
    {
        title: 'Surprise',
        path: '/surprise',
        icon: <GiIcons.GiCutLemon />,
    }
]