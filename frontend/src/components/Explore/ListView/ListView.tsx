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
                <s.EmbroideryTableCell>{e.author_name}</s.EmbroideryTableCell>
                <s.EmbroideryTableCell>{e.anatomy_name}</s.EmbroideryTableCell>
                <s.EmbroideryTableCell toCentre>{e.author_origin}</s.EmbroideryTableCell>
            </s.EmbroideryTableRow>
        )}

    </s.EmbroideryTable>
    )
}