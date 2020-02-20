import numpy as np
import pandas as pd


agentCollection = {}

newDF = pd.DataFrame()

fileNumber = 1

while fileNumber <= 10:
  
  agentCollection[fileNumber] = pd.read_csv('./data/agents/datafile-agents-' + str(fileNumber) + '.csv')
  fileNumber += 1


agents = pd.concat(agentCollection, axis=0, join='outer', ignore_index=True, keys=None,
          levels=None, names=None, verify_integrity=False, copy=True)

for fileNumber in range(1, 11):

  readFileName = './data/propertyAgents/datafile-property-agents-' + str(fileNumber) + '.csv'
  writeFileName = './data/propertyAgentsCombined/datafile-property-agents-combined-' + str(fileNumber) + '.csv'

  relationship = pd.read_csv(readFileName)

  df = pd.merge(relationship, agents, left_on=['agentId'], right_on=['id'])

  del df['id']

  df = df.sort_values(['propertyId', 'listingAgent'], ascending=[True, False])

  print(df.head())
  print(df.shape)

  df.to_csv(writeFileName, encoding='utf-8', index=False)