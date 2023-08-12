import { Box } from '@mui/material'
import BlogCard from './BlogCard'

const BlogPage = () => {
	return (
		<Box
			p={1}
			sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 2}}
		>
			<BlogCard image="../../../../../../public/paella.jpg" />
			<BlogCard image="../../../../../../public/paella.jpg" />
			<BlogCard image="../../../../../../public/paella.jpg" />
			<BlogCard image="../../../../../../public/paella.jpg" />
			<BlogCard image="../../../../../../public/paella.jpg" />
			<BlogCard image="../../../../../../public/paella.jpg" />
		</Box>
	)
}

export default BlogPage
