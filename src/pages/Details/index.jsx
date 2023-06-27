import { Container, Links, Content } from "./styles"

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Details(){
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota"/>
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iusto nobis magni, deleniti minus maiores aperiam pariatur repellendus recusandae fuga tenetur maxime odio adipisci saepe id vel ratione quis totam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum harum illum tempore praesentium tempora veritatis nostrum laudantium dolores voluptatem perferendis, reiciendis ipsum laborum quos neque rerum at eligendi nesciunt sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. A dicta hic corporis blanditiis, ducimus totam maiores sit velit illum necessitatibus. Libero inventore commodi officia quibusdam facere aut consectetur illo accusamus.</p>
          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="node"/>
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}