import ArcadeIcon from '../assets/images/icon-arcade.svg'
import AdvancedIcon from '../assets/images/icon-advanced.svg'
import ProIcon from '../assets/images/icon-pro.svg'

export const planDetails = [
    { id: 0, name: 'Arcade', price: { perMonth: 9, perYear: 90 }, icon: ArcadeIcon },
    { id: 1, name: 'Advanced', price: { perMonth: 12, perYear: 120 }, icon: AdvancedIcon },
    { id: 2, name: 'Pro', price: { perMonth: 15, perYear: 150 }, icon: ProIcon },
]

Object.freeze(planDetails)

export const addOnsList = [
    { id: 0, name: 'Online service', description: 'Access to multiplayer games', price: { perMonth: 1, perYear: 10 } },
    { id: 1, name: 'Larger storage', description: 'Extra 1TB of cloud save', price: { perMonth: 2, perYear: 20 } },
    { id: 2, name: 'Customizable profile', description: 'Custom theme on your profile', price: { perMonth: 2, perYear: 20 } },
]

Object.freeze(planDetails)