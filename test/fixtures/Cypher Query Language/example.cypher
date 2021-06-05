MATCH (n) RETURN n // This is a comment
MATCH (n) WHERE n.property = '//This is NOT a comment' RETURN n
MATCH (n)-->(b) RETURN b
MATCH (n:title) WHERE NOT (n)<-[:CONTAINS]-(:title) RETURN n
MATCH (john { name: 'John Doe' })-[:ACTED_IN*1..3]-(mymovie:Movie) RETURN mymovie.title
MATCH (n:Movie { title: 'Hello World' }) OPTIONAL MATCH (n)-->(x) RETURN x
MATCH (n) RETURN n.name ORDER BY n.name LIMIT toInteger(3 * rand())+ 1

MATCH (n)
RETURN CASE
 WHEN n.param1 = 'example' THEN 1
 WHEN n.param2 < 10 THEN 2
 ELSE 3
END AS result

MATCH (n { name: 'John Doe' })-[r:`TYPE
WITH SPACE`]->()

MERGE (person:Person)
ON MATCH SET person.found = TRUE , person.lastAccessed = timestamp()
RETURN person.name, person.found, person.lastAccessed

LOAD CSV FROM 'https://example.com/data.csv' AS line
CREATE (:MyType { name: line[1], year: toInteger(line[2])})
