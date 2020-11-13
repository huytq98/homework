import Vertice from "./Vertice.js";
import Edge from "./Edge.js";
export default class Graph{
    vertices;
    edges;

    constructor() {
        this.vertices = [];
        this.edges = [];
    }

    addVertice(vertice){
        if (vertice instanceof Vertice){
            this.vertices.push(vertice);
        }
    }
    addEdge(edge){
        if(edge instanceof Edge){
            this.edges.push(edge);
        }
    }

    info(){
        console.log("Vertical", this.vertices);
        console.log("Edge", this.edges);
    }

    findNearVertice(verticaName){
        let foundEdges = this.edges.filter(function (edge){
            return edge.a.data === verticaName || edge.b.data === verticaName;
        })

        let foundVertice = [];
        foundEdges.forEach(function (edge){
            if (edge.a.data === verticaName){
                foundVertice.push(edge.b)
            }else if (edge.b.data === verticaName){
                foundVertice.push(edge.a);
            }
        })
    }
}
