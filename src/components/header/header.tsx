import rocketLogo from '../../assets/rocket.svg'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <picture>
        <img alt="Logo de foguete azul e roxo, representando o aplicativo Todo" src={rocketLogo} />
      </picture>
      <h1>
        to<span>do</span>
      </h1>
    </Container>
  )
}
