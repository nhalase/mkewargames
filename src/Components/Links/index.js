import React from 'react'
import { Link } from 'react-router-dom'

const HomeLink = (props) => <Link exact strict to='/' {...props} />
const AboutLink = (props) => <Link exact to='/about' {...props} />
const RegisterLink = (props) => <Link exact to='/register' {...props} />
const PrivacyPolicyLink = (props) => <Link exact to='privacy' {...props} />

export { HomeLink, AboutLink, RegisterLink, PrivacyPolicyLink }
