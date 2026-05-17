f = open("src/pages/Home.jsx", "w")
lines = []
lines.append("import { Link } from 'react-router-dom'")
lines.append("import { ArrowRight, Sparkles, Mic, Film, Leaf } from 'lucide-react'")
lines.append("import { motion } from 'framer-motion'")
lines.append("import PageWrapper from '../components/PageWrapper'")
lines.append("import SectionReveal from '../components/SectionReveal'")
lines.append("")
f.write("
".join(lines))
f.close()
print("script ok")
