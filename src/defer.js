import preloader from '../modules/preloader/preloader.js'
// const menu = require('../modules/menu/menu.js')
// const video = require('../modules/video/video.js')
// const section = require('../modules/section/section.js')

preloader.init()
// menu.init()
// video.init()
// section.carouselInit()

import React from 'react'
import ReactDOM from 'react-dom'
import Section from '../modules/section/section.react.js'
import data from '../data/about.yml'

ReactDOM.render(
	<Section data={data}/>,
	document.getElementById('main')
)
