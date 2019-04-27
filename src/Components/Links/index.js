import React from 'react'
import { Link } from 'react-router-dom'

const HomeLink = (props) => <Link to='/' {...props} />
const AboutLink = (props) => <Link to='/about' {...props} />
const PrivacyPolicyLink = (props) => <Link to='/privacy' {...props} />
const LogInLink = (props) => <Link to='/login' {...props} />

export { HomeLink, AboutLink, PrivacyPolicyLink, LogInLink }
