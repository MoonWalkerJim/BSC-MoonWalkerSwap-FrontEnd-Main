import React from 'react'
import { Card, CardBody, Heading, Text } from 'moonwalkerswap-uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getDustAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledDustStats = styled(Card)`
  background-image: url('https://seeklogo.com/images/B/binance-coin-bnb-logo-CD94CC6D31-seeklogo.com.png');
  background-repeat: no-repeat;
  background-position: bottom right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`
const CardImage = styled.img`
  margin-bottom: 16px;
`

const DustStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getDustAddress()))
  const dustSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledDustStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, "Stats")}
        </Heading>
        <CardImage src="https://seeklogo.com/images/B/binance-coin-bnb-logo-CD94CC6D31-seeklogo.com.png" alt="wings logo" width={64} height={64} />
        <Block>
          {dustSupply && <CardValue fontSize="36px" value={dustSupply} />}
          <Text fontSize="14px" color="#808080">{TranslateString(536, "Total VRMC Supply")}</Text>
        </Block>
        <Block>
          <CardValue fontSize="36px" decimals={0} value={burnedBalance} />
          <Text fontSize="14px" color="#808080">{TranslateString(538, "Total VRMC Burned")}</Text>
        </Block>
        <Block>
          <CardValue fontSize="36px" decimals={0} value={25} />
          <Text fontSize="14px" color="#808080">{TranslateString(540, "New VRMC/block")}</Text>
        </Block>
      </CardBody>
    </StyledDustStats>
  )
}

export default DustStats
