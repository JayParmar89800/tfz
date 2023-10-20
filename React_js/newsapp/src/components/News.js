import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    articles =  [
        {
          "source": { "id": "bbc-sport", "name": "BBC Sport" },
          "author": null,
          "title": "World Cup: India v Bangladesh - clips, radio & text",
          "description": "Follow live text, in-play video clips and radio commentary as India play Bangladesh in the Men's Cricket World Cup 2023.",
          "url": "http://www.bbc.co.uk/sport/live/cricket/66858253",
          "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
          "publishedAt": "2023-10-19T08:37:18.2900497Z",
          "content": "Bangladesh: Liton Das, Tanzid Hasan, Najmul Hossain Shanto (c), Mehidy Hasan Miraz, Mushfiqur Rahim (wk), Towhid Hridoy, Mahmudullah, Nasum Ahmed, Hasan Mahmud, Mustafizur Rahman, Shoriful Islam.\r\nIn… [+172 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ]
    constructor()
    {
        super();
        console.log("hello i am a constructor from news component");
        this.state={
            articles: this.articles,
            loading:false
        }
    }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey -Top Headline</h2>
        <div className='row my-2'>
            <div className='col-md-4 col-12'>
                <NewsItems title="abc djkfjnj" description="lorem epsimkdnfjknsdj d cnfd v" imageUrl="https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png"/>
            </div>
            <div className='col-md-4 col-12'>
                <NewsItems title="abc djkfjnj" description="lorem epsimkdnfjknsdj d cnfd v"/>
            </div>
            <div className='col-md-4 col-12'>
                <NewsItems title="abc djkfjnj" description="lorem epsimkdnfjknsdj d cnfd v"/>
            </div>
        
        </div>
      </div>
    )
  }
}

export default News
