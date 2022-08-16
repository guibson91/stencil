import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pokemon-list',
  styleUrl: 'pokemon-list.css',
  shadow: true,
})
export class PokemonList {

  @Prop() color: string;

  @Prop() list: {
    name: string,
    url: string,
    image?: string;
  }[];

  render() {
    return (
      <Host>
        {this.list?.length > 0 ?
          <section class='list'>
            {this.list.map((item) => {
              return (<div class='item'>
                <img src={item.image ? item.image : "assets/images/placeholder.jpg"} />
                <div>
                  <h1 style={{ color: this.color ? this.color : '#a4b740' }}>{item.name}</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>);
            })}
          </section> :
          <p style={{ textAlign: 'center', marginTop: '30px' }}>Não há mais pokemons</p>
        }
      </Host>
    );
  }

}