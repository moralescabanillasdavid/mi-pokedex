# Mi Pokedex

A simple API client for PokeAPI built with Node.js and TypeScript. Fetch any Pokemon by name or ID!

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Start the server:
   ```bash
   npm start
   ```

Or for development:
```bash
npm run dev
```

## API Usage

The API acts as a proxy to PokeAPI, providing endpoints to fetch Pokemon, Type, and Ability data. You can fetch any Pokemon by writing its name (e.g., "pikachu", "charizard") or its ID number.

### Base URL
```
http://localhost:3002/api
```

### Front-end
The project includes a simple web interface. Visit `http://localhost:3002` in your browser to use the Pokemon search interface.

#### How to Use
1. Start the server: `npm start`
2. Open your browser and go to `http://localhost:3002`
3. Enter a Pokemon name or ID in the search box
4. Click "Buscar Pokemon" to see:
   - Pokemon sprites (normal and shiny)
   - Basic information (ID, height, weight)
   - Types with color coding
   - Abilities (including hidden ones)

The interface loads with Pikachu by default for demonstration.

### Endpoints

#### 1. Get Pokemon
- **URL**: `/pokemon/{nameOrId}`
- **Method**: GET
- **Description**: Fetches detailed information about a specific Pokemon by name or ID.
- **Parameters**:
  - `nameOrId`: The name (e.g., "pikachu", "charizard") or ID (e.g., 25, 6) of the Pokemon.
- **Example**:
  ```
  GET http://localhost:3002/api/pokemon/pikachu
  GET http://localhost:3002/api/pokemon/25
  GET http://localhost:3002/api/pokemon/charizard
  ```
- **Response**: JSON object containing filtered Pokemon data (id, name, height, weight, types, abilities, sprites).

#### 2. Get Type
- **URL**: `/type/{nameOrId}`
- **Method**: GET
- **Description**: Fetches information about a Pokemon type.
- **Parameters**:
  - `nameOrId`: The name (e.g., "electric") or ID of the type.
- **Example**:
  ```
  GET http://localhost:3000/api/type/electric
  ```
- **Response**: JSON object with type details, including damage relations, Pokemon that have this type, etc.

#### 3. Get Ability
- **URL**: `/ability/{nameOrId}`
- **Method**: GET
- **Description**: Fetches information about a Pokemon ability.
- **Parameters**:
  - `nameOrId`: The name (e.g., "static") or ID of the ability.
- **Example**:
  ```
  GET http://localhost:3000/api/ability/static
  ```
- **Response**: JSON object with ability details, including effect, Pokemon that have this ability, etc.

### Error Handling
- **500 Internal Server Error**: Returned if there's an issue fetching data from PokeAPI or a server error.
- **Response Format**:
  ```json
  {
    "error": "Error message"
  }
  ```

### Data Sources
All data is fetched from the official PokeAPI (https://pokeapi.co/api/v2/). Responses are filtered to include only essential information for better performance.

### Examples with curl
```bash
# Get Pikachu data
curl http://localhost:3002/api/pokemon/pikachu

# Get Charizard by ID
curl http://localhost:3002/api/pokemon/6

# Get Electric type info
curl http://localhost:3002/api/type/electric

# Get Static ability info
curl http://localhost:3002/api/ability/static
```

## Testing

Run tests:
```bash
npm test
```

## Project Structure
- `src/api/`: API client and endpoints
- `src/types/`: TypeScript interfaces
- `src/services/`: Business logic services
- `src/controllers/`: Express route handlers
- `src/routes/`: Route definitions
- `tests/`: Unit and integration tests