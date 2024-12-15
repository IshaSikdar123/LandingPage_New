import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Switch } from '@radix-ui/react-switch'; // Ensure this library is installed
import { Button } from '@headlessui/react';



function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const [hoveredPlan, setHoveredPlan] = useState(null)

  const plans = [
    {
      name: 'Starter',
      price: isYearly ? 7 : 9,
      description: 'Recommended for people with at least 1 year experience in crypto markets.',
      features: [
        '1 user account',
        '24 transactions per month',
        '16 altcoin pairs',
        '32 api connected at the same time maximum',
        'Basic AI analysis of markets',
        'Build-in wallet API for managing your crypto'
      ]
    },
    {
      name: 'Professional',
      price: isYearly ? 39 : 49,
      description: 'All functions available, perfect plan for experienced investors.',
      features: [
        '1 user account',
        'Unlimited transactions per month',
        'Unlimited altcoin pairs',
        'Unlimited api connected at the same time',
        'Advanced AI analysis of markets',
        'Build-in wallet API for managing your crypto',
        'Arbitra wallet',
        'Customer support available 24h/7'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: isYearly ? 79 : 99,
      description: 'For teams, companies and crypto-head families.',
      features: [
        'Unlimited users accounts',
        'Unlimited transactions per month',
        'Unlimited altcoin pairs',
        'Unlimited api connected at the same time maximum',
        'Advanced AI analysis of markets with experts insights',
        'Build-in wallet API for managing your crypto',
        'Arbitra PRO wallet',
        'High priority customer support available 24h/7'
      ],
      enterprise: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Smart tech with smart pricing.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
"At our core, we believe in offering the best value. With our yearly plans, you can enjoy even greater savings and unlock more benefits!"
          </motion.p>
          
          <div className="flex items-center justify-center mt-8 gap-3">
            <span className={`${!isYearly ? 'text-emerald-400' : 'text-gray-400'}`}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-emerald-500"
            />
            <span className={`${isYearly ? 'text-emerald-400' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-2 inline-block bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-full">
                Save 20%!
              </span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ease-in-out transform ${
                hoveredPlan === plan.name
                  ? 'scale-105 shadow-2xl bg-gradient-to-br from-teal-900/70 to-teal-800/50 border border-teal-500/30 -translate-y-4'
                  : plan.popular
                  ? 'bg-gradient-to-br from-emerald-900/50 to-emerald-800/30 border border-emerald-500/20'
                  : 'bg-gray-800/50 border border-gray-700/30'
              } hover:cursor-pointer`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-sm px-3 py-1 rounded-full">
                  Bestseller
                </span>
              )}
              <h3 className={`text-xl font-semibold mb-2 ${
                hoveredPlan === plan.name ? 'text-teal-300' : ''
              }`}>{plan.name}</h3>
              <p className={`text-sm mb-6 ${
                hoveredPlan === plan.name ? 'text-teal-200' : 'text-gray-400'
              }`}>{plan.description}</p>
              <div className="mb-6">
                <span className={`text-5xl font-bold ${
                  hoveredPlan === plan.name ? 'text-teal-200' : ''
                }`}>${plan.price}</span>
                <span className={`ml-2 ${
                  hoveredPlan === plan.name ? 'text-teal-300' : 'text-gray-400'
                }`}>/MO</span>
              </div>
              <Button
                className={`w-full mb-8 ${
                  hoveredPlan === plan.name
                    ? 'bg-teal-600 hover:bg-teal-700'
                    : plan.popular
                    ? 'bg-emerald-500 hover:bg-emerald-600'
                    : plan.enterprise
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : ''
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.enterprise ? 'Schedule a call' : 'Get started'}
              </Button>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className={`flex items-start gap-3 text-sm ${
                      hoveredPlan === plan.name ? 'text-teal-100' : 'text-gray-300'
                    }`}
                  >
                    <Check className={`h-5 w-5 shrink-0 mt-0.5 ${
                      hoveredPlan === plan.name ? 'text-teal-400' : 'text-emerald-500'
                    }`} />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
export default Pricing;
