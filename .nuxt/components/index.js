import { wrapFunctional } from './utils'

export { default as Header } from '../../components/Header.vue'

export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
