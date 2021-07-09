import Home_one from '../pages/Home_one'
import Home_two from '../pages/Home_two'
import Home_three from '../pages/Home_three'
import Home_four from '../pages/Home_four'
import Home_five from '../pages/Home_five'
import Home_six from '../pages/Home_six'
import NotFound from '../pages/404'
import Coming_soon from '../pages/Coming_soon'

export const routes = [
    {
        path:'*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path:'/coming-soon',
        name: 'Coming_soon',
        component: Coming_soon
    },
    {
        path:'/',
        name: 'Home_one',
        component: Home_one
    },
    {
        path:'/home-two',
        name: 'Home_two',
        component: Home_two
    },
    {
        path:'/home-three',
        name: 'Home_three',
        component: Home_three
    },
    {
        path:'/home-four',
        name: 'Home_four',
        component: Home_four
    },
    {
        path:'/home-five',
        name: 'Home_five',
        component: Home_five
    },
    {
        path:'/home-six',
        name: 'Home_six',
        component: Home_six
    }
];