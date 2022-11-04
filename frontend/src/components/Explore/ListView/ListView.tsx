import React from 'react'
import { Embroidery } from '../../../types/types';
import * as s from './ListView.theme';


interface Props {
    filteredEmbroideries: Embroidery[]
}

export const ListView: React.FC<Props> = ({
    filteredEmbroideries
}) => {

    return (
    <s.EmbroideryTable>

        <s.EmbroideryTableHeader>
            <s.EmbroideryColumnHeader> Author Name </s.EmbroideryColumnHeader>
            <s.EmbroideryColumnHeader> Anatomy </s.EmbroideryColumnHeader>
            <s.EmbroideryColumnHeader> Origin </s.EmbroideryColumnHeader>
        </s.EmbroideryTableHeader>

        {filteredEmbroideries.map(e =>
            <s.EmbroideryTableRow key={e.id}>
                <s.EmbroideryTableCell>{e.authorName}</s.EmbroideryTableCell>
                <s.EmbroideryTableCell>{e.anatomyName}</s.EmbroideryTableCell>
                <s.EmbroideryTableCell toCentre>{e.authorOrigin}</s.EmbroideryTableCell>
            </s.EmbroideryTableRow>
        )}

    </s.EmbroideryTable>
    )
}