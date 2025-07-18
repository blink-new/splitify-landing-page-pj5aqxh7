import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { 
  Smartphone, 
  Users, 
  DollarSign, 
  BarChart3, 
  Star, 
  ArrowRight,
  Check,
  Menu,
  X
} from 'lucide-react'

function App() {
  const [email, setEmail] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
    // Add success toast here
  }

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Smart Group Management",
      description: "Effortlessly organize and manage your expense groups with intelligent categorization."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Instant Split Calculations",
      description: "Advanced algorithms ensure fair and accurate expense splitting every time."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Track spending patterns and get insights into your group's financial habits."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Cross-platform Sync",
      description: "Seamlessly sync across all devices with real-time updates for everyone."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      handle: "@sarahc_design",
      content: "Splitify has completely transformed how our friend group handles expenses. No more awkward conversations about money! 🙌",
      avatar: "SC"
    },
    {
      name: "Marcus Johnson",
      handle: "@mjohnson_dev",
      content: "The UI is incredibly intuitive and the split calculations are always spot-on. Best expense app I've used.",
      avatar: "MJ"
    },
    {
      name: "Elena Rodriguez",
      handle: "@elena_travels",
      content: "Perfect for group trips! Everyone can see expenses in real-time and settling up is effortless. Highly recommend! ✈️",
      avatar: "ER"
    }
  ]

  return (
    <div className="min-h-screen bg-blink-bg text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 star-dots opacity-30" />
      
      {/* Mouse follower effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)`,
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            <span className="text-white">Split</span>
            <span className="cyan-gradient">ify</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-blink-gray hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-blink-gray hover:text-white transition-colors">Reviews</a>
            <a href="#pricing" className="text-blink-gray hover:text-white transition-colors">Pricing</a>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-card border border-border rounded-lg mx-6 mt-2 p-4"
          >
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-blink-gray hover:text-white transition-colors">Features</a>
              <a href="#testimonials" className="text-blink-gray hover:text-white transition-colors">Reviews</a>
              <a href="#pricing" className="text-blink-gray hover:text-white transition-colors">Pricing</a>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6">
              ✨ Coming Soon to App Store & Google Play
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Don't just split it,{' '}
              <span className="cyan-gradient">Splitify</span> it.
            </h1>
            
            <p className="text-xl md:text-2xl text-blink-gray mb-8 max-w-2xl mx-auto">
              Turn any group expense into a beautifully organized, fair split in seconds
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-w-[300px]"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium glow-cyan"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

            <p className="text-sm text-blink-gray">
              ⚡ You've used <strong>3/25</strong> messages • 
              <Button variant="link" className="text-primary p-0 h-auto font-normal ml-1">
                Upgrade
              </Button>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Features that make splitting <span className="cyan-gradient">effortless</span>
            </h2>
            <p className="text-xl text-blink-gray max-w-2xl mx-auto">
              Everything you need to manage group expenses with zero friction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-card border-border h-full hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Savings Section */}
      <section className="relative z-10 px-6 py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-6">💸</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Stop losing money on <span className="cyan-gradient">forgotten debts</span>
            </h2>
            <p className="text-xl text-blink-gray max-w-3xl mx-auto">
              The average person loses $847 per year on unpaid group expenses. Splitify ensures you never lose track of who owes what.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">$847</div>
                  <div className="text-lg font-semibold text-card-foreground mb-3">Average Annual Loss</div>
                  <p className="text-muted-foreground">
                    Money lost per person due to forgotten group expenses and awkward debt collection
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">73%</div>
                  <div className="text-lg font-semibold text-card-foreground mb-3">Faster Settlements</div>
                  <p className="text-muted-foreground">
                    Splitify users settle their group expenses 73% faster than traditional methods
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">99.2%</div>
                  <div className="text-lg font-semibold text-card-foreground mb-3">Accuracy Rate</div>
                  <p className="text-muted-foreground">
                    Our smart algorithms ensure near-perfect expense calculations every single time
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="text-2xl font-bold text-card-foreground mb-4">
                  💡 Pro Tip: Track Everything
                </div>
                <p className="text-muted-foreground text-lg">
                  Users who track all group expenses with Splitify recover an average of <span className="text-primary font-semibold">$1,200+ annually</span> in previously forgotten debts.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Loved by <span className="cyan-gradient">thousands</span>
            </h2>
            <p className="text-xl text-blink-gray">
              See what early users are saying about Splitify
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-card border-border h-full hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm mr-3">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.handle}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {testimonial.content}
                    </p>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Simple, <span className="cyan-gradient">transparent</span> pricing
            </h2>
            <p className="text-xl text-blink-gray mb-12">
              Start free, upgrade when you need more
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card className="bg-card border-border hover:border-border/60 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Free</h3>
                  <p className="text-muted-foreground mb-6">Perfect for small groups</p>
                  <div className="text-4xl font-bold mb-6 text-foreground">
                    $0<span className="text-lg text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-foreground">
                      <Check className="w-5 h-5 text-primary mr-3" />
                      <span>Up to 5 group members</span>
                    </li>
                    <li className="flex items-center text-foreground">
                      <Check className="w-5 h-5 text-primary mr-3" />
                      <span>Basic expense tracking</span>
                    </li>
                    <li className="flex items-center text-foreground">
                      <Check className="w-5 h-5 text-primary mr-3" />
                      <span>Simple split calculations</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary relative hover:border-primary/80 transition-all duration-300">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Pro</h3>
                  <p className="text-muted-foreground mb-6">For power users</p>
                  <div className="text-4xl font-bold mb-6 text-foreground">
                    $9<span className="text-lg text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-foreground">
                      <Check className="w-5 h-5 text-primary mr-3" />
                      <span>Unlimited group members</span>
                    </li>
                    <li className="flex items-center text-foreground">
                      <Check className="w-5 h-5 text-primary mr-3" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center text-foreground">
                      <Check className="w-5 h-5 text-primary mr-3" />
                      <span>Custom categories</span>
                    </li>
                    <li className="flex items-center text-foreground">
                      <Check className="w-5 h-5 text-primary mr-3" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="cyan-gradient">Splitify</span> your expenses?
            </h2>
            <p className="text-xl text-blink-gray mb-8">
              Join thousands of users who've already simplified their group expenses
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg px-8 py-6 glow-cyan-strong"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-blink-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">Split</span>
                <span className="cyan-gradient">ify</span>
              </div>
              <p className="text-blink-gray">
                Making group expenses effortless, one split at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-blink-gray">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blink-gray">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-blink-gray">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blink-border mt-12 pt-8 text-center text-blink-gray">
            <p>&copy; 2024 Splitify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App