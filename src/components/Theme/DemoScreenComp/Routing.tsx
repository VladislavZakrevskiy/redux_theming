import { useAppSelector } from '../../../store/hooks'
import BlogPage from './pages/Blog/BlogPage'
import ComponentsPage from './pages/Components/ComponentsPage'
import TextPage from './pages/TextPage'

const Routing = () => {
	const { path } = useAppSelector((state) => state.routing)

	if (path === 'Blog') {
		return <BlogPage />
	}

	if (path === 'Components') {
		return <ComponentsPage />
	}

	if (path === 'Text') {
		return <TextPage />
	}

	return <div>Error</div>
}

export default Routing
