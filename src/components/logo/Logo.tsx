import { NavLink } from 'react-router-dom'
import { Icon } from '../icon/Icon'

export function Logo() {
	return (
		<NavLink to='/home'>
			<Icon idIcon='logoIcon' width='40' height='40' viewBox='0 0 40 40' />
		</NavLink>
	)
}
